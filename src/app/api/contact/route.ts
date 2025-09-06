import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = contactSchema.parse(body);

    // Aqui você pode salvar no banco de dados ou enviar um e-mail
    console.log({ name, email, message });

    return NextResponse.json(
      { success: true, message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Erro ao enviar mensagem" },
      { status: 400 }
    );
  }
}
