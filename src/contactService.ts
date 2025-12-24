import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// ✅ تم وضع كل مفاتيحك بشكل صحيح
const SERVICE_ID = "service_w4uopbl";
const TEMPLATE_ID = "template_xi12phd";
const PUBLIC_KEY = "-FWQCDVQFrhOS5QMv";

export const sendMessage = async (data: ContactFormData) => {
  
  // ربط البيانات مع القالب الذي صممته
  const templateParams = {
    name: data.name,      // يطابق {{name}}
    email: data.email,    // يطابق {{email}}
    phone: data.phone,    // يطابق {{phone}}
    title: data.subject,  // يطابق {{title}} في عنوان الرسالة
    message: data.message // يطابق {{message}}
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    
    if (response.status === 200) {
      return { 
        success: true, 
        message: "تم إرسال رسالتك بنجاح! شكراً لتواصلك." 
      };
    }
  } catch (error) {
    console.error("FAILED...", error);
    return { 
      success: false, 
      message: "فشل الإرسال. يرجى التحقق من اتصالك بالإنترنت والمحاولة مجدداً." 
    };
  }
  
  return { success: false, message: "حدث خطأ غير متوقع." };
};
