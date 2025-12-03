import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UserPlus, Loader2, CheckCircle } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "Ad en az 2 karakter olmalıdır"),
  lastName: z.string().min(2, "Soyad en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().optional(),
  introduction: z.string().min(10, "Kendinizi tanıtın (en az 10 karakter)"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface RegistrationFormProps {
  onSubmit?: (data: FormData) => Promise<void>;
}

export default function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      introduction: "",
      message: "",
    },
  });

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        // todo: remove mock functionality
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted:", data);
      }
      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kayit" className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-form-title">
            Üye Ol
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Derneğimize üye olmak için aşağıdaki formu doldurun
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent">
                <UserPlus className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <CardTitle>Üyelik Başvurusu</CardTitle>
                <CardDescription>Bilgilerinizi eksiksiz doldurun</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Başvurunuz Alındı!
                </h3>
                <p className="text-muted-foreground">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ad</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Adınız"
                              {...field}
                              data-testid="input-first-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Soyad</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Soyadınız"
                              {...field}
                              data-testid="input-last-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-posta</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="ornek@email.com"
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefon (Opsiyonel)</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="05XX XXX XX XX"
                              {...field}
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="introduction"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kendinizi Tanıtın</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Kısaca kendinizden, ilgi alanlarınızdan ve neden derneğimize katılmak istediğinizden bahsedin..."
                            className="min-h-[120px] resize-none"
                            {...field}
                            data-testid="input-introduction"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>İletmek İstediğiniz Mesaj (Opsiyonel)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Eklemek istediğiniz başka bir şey varsa buraya yazabilirsiniz..."
                            className="min-h-[100px] resize-none"
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground border border-accent-border hover:bg-accent/90"
                    disabled={isSubmitting}
                    data-testid="button-submit-form"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : (
                      "Başvuru Yap"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
