import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().trim().email('Invalid email').max(255, 'Email is too long'),
  subject: z.string().trim().min(1, 'Subject is required').max(200, 'Subject is too long'),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message is too long'),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aqsarayyan@gmail.com',
    href: 'mailto:aqsarayyan@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 813 7747 0090',
    href: 'tel:+6281377470090',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Banda Aceh, Indonesia',
    href: '#',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: 'Message Sent! ✨',
        description: 'Thank you for contacting me. I will reply as soon as possible.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: 'Failed to Send',
        description: 'An error occurred. Please try again or contact me directly via email.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gray-400 font-medium mb-2 block">Contact</span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold mb-4 text-white">
                Let's Collaborate!
              </h3>

              <p className="text-gray-400 leading-relaxed">
                I am a student developer interested in programming, web development, and technology.
                If you want to discuss a project, collaboration, or technology, feel free to contact me.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                    <info.icon className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="font-medium text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-black border-white/10 text-white placeholder:text-gray-500"
                />

                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="bg-black border-white/10 text-white placeholder:text-gray-500"
                />
              </div>

              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Message Subject"
                className="bg-black border-white/10 text-white placeholder:text-gray-500"
              />

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={5}
                className="bg-black border-white/10 text-white placeholder:text-gray-500"
              />

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-white text-black hover:bg-gray-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}