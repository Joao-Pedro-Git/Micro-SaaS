// Css
import "../globals.css";
import "./SignInCss.css";

// Head from SEO
import Head from "next/head";

// Imagens and Icons
import Image from "next/image";
import ImgSite from "../../../public/site.png";
import ImgSitee from "../../../public/sitee.png";

// Components shadcn
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../components/ui/card";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { FaGoogle } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Entrar na Plataforma - Moost Digital Lab</title>
        <meta
          name="description"
          content="Faça login para acessar sua conta e aproveitar os recursos exclusivos da nossa plataforma."
        />
      </Head>

      <main className="h-screen flex w-full">
        <div className="bg-primary-foreground  w-[100vh] h-full items-center justify-center flex p-16 imgsSignIn">
          <Carousel className="w-full max-w-xl">
            <CarouselContent>
              <CarouselItem>
                <div className="flex aspect-square bg-background rounded p-8">
                  <Image
                    src={ImgSite}
                    alt="Logo Site"
                    width={500}
                    height={300}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex aspect-square bg-background rounded p-8">
                  <Image
                    src={ImgSitee}
                    alt="Logo Site"
                    width={500}
                    height={300}
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tighter">
                Entre com sua conta
              </CardTitle>

              <CardDescription>
                Utilize seu email e senha ou o Google para entrar.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  placeholder="exemple@email.com"
                  type="email"
                />
              </div>
              <div className="mt-4">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  placeholder="Sua senha secreta"
                  type="password"
                />
              </div>
              <Button className="mt-4 w-full">Entrar</Button>
              <div className="flex items-center gap-6 mt-4">
                <Separator />
                <span className="text-xs text-muted-foreground">OU</span>
                <Separator />
              </div>

              <Button variant="outline" className="mt-4 w-full">
                <FaGoogle />
                Entrar com o Google
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-muted-foreground text-center text-sm">
                Ao entrar em nossa plataforma, você concorda com nossos termos
                de uso e política de privacidade.
              </p>
            </CardFooter>
          </Card>
        </section>
      </main>
    </>
  );
}
