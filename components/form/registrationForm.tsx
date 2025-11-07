"use client";

import { uploadFiles } from "@/utils/uploadthing";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Select, Upload, message } from "antd";
import { UploadFile } from "antd/es/upload/interface";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface RegistrationFormValues {
  fullName: string;
  phone: string;
  email: string;
  currentPosition: string;
  experience: string;
  major: string;
  referralSource: string;
  cvFile?: { originFileObj: File }[];
  terms: boolean;
}

export default function RegistrationForm() {
  const locale = useLocale();
  const t = useTranslations("registration");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleSubmit = async (values: RegistrationFormValues) => {
    try {
      setLoading(true);
      message.loading(t("form.submitting"), 1);

      let cvUrl = "";
      if (fileList.length > 0 && fileList[0].originFileObj) {
        const uploaded = await uploadFiles("cvUploader", {
          files: [fileList[0].originFileObj as File],
        });
        cvUrl = uploaded[0].ufsUrl;
      }

      const payload = { ...values, cvUrl };
      console.log("✅ Payload gửi backend:", payload);

      // ✅ Gọi API route thay vì trực tiếp Google Script
      const response = await fetch("/api/submit-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("✅ Response:", result);

      if (result.success) {
        message.success(t("form.successMessage") || "Đăng ký thành công!");
        router.push(`/${locale}/thank-you`);
      } else {
        throw new Error(result.error || "Submit failed");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      message.error(
        t("form.errorMessage") || "Có lỗi xảy ra, vui lòng thử lại!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="registration-form"
      className="max-w-2xl mx-auto bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-3xl p-6 md:p-8 lg:p-10 scroll-mt-[120px]"
    >
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center mb-2">
        {t("form.title")}
      </h3>
      <p className="text-white/70 text-sm md:text-base text-center mb-8">
        {t("form.subtitle")}
      </p>

      <Form
        layout="vertical"
        onFinish={handleSubmit}
        className="[&_.ant-form-item-label>label]:text-white"
      >
        <Form.Item
          label={t("form.fullName")}
          name="fullName"
          rules={[{ required: true, message: t("form.requiredName") }]}
        >
          <Input size="large" placeholder="Nguyen Van A" />
        </Form.Item>

        <Form.Item
          label={t("form.phone")}
          name="phone"
          rules={[{ required: true, message: t("form.requiredPhone") }]}
        >
          <Input size="large" placeholder="0xxxxxxxxx" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: t("form.requiredEmail") },
            { type: "email", message: t("form.invalidEmail") },
          ]}
        >
          <Input size="large" placeholder="example@email.com" />
        </Form.Item>

        <Form.Item
          label={t("form.currentPosition")}
          name="currentPosition"
          rules={[{ required: true, message: t("form.requiredPosition") }]}
        >
          <Select
            size="large"
            placeholder={t("form.selectOption")}
            options={[
              { value: "student", label: t("form.student") },
              { value: "graduate", label: t("form.graduate") },
              { value: "working", label: t("form.working") },
            ]}
          />
        </Form.Item>

        <Form.Item
          label={t("form.experience")}
          name="experience"
          rules={[{ required: true, message: t("form.requiredExperience") }]}
        >
          <Input size="large" placeholder="1" />
        </Form.Item>

        <Form.Item
          label={t("form.major")}
          name="major"
          rules={[{ required: true, message: t("form.requiredMajor") }]}
        >
          <Input size="large" placeholder={t("form.majorPlaceholder")} />
        </Form.Item>

        {/* Upload Drag Area */}
        <Form.Item label={t("form.cvUpload")} name="cvFile">
          {fileList.length === 0 ? (
            <Upload.Dragger
              name="cv"
              beforeUpload={() => false}
              fileList={fileList}
              onChange={({ fileList }) => setFileList(fileList)}
              accept=".pdf,.doc,.docx"
              maxCount={1}
              className="text-white/80!"
            >
              <p className="ant-upload-drag-icon">
                <UploadOutlined />
              </p>
              <p className="ant-upload-text text-white/80!">
                {t("form.cvUploadHint")}
              </p>
              <p className="ant-upload-hint text-xs text-white/80!">
                {t("form.cvUploadFormat")}
              </p>
            </Upload.Dragger>
          ) : (
            <div className="flex items-center justify-between bg-white/10 border border-white/20 rounded-lg p-3 text-white">
              <span className="truncate">{fileList[0].name}</span>
              <Button
                danger
                size="small"
                onClick={() => setFileList([])}
                className="ml-3"
              >
                {t("form.removeFile")}
              </Button>
            </div>
          )}
        </Form.Item>

        <Form.Item
          label={t("form.referralSource")}
          name="referralSource"
          rules={[{ required: true, message: t("form.requiredReferral") }]}
        >
          <Select
            size="large"
            placeholder={t("form.selectOption")}
            options={[
              {
                value: "fanpage_ig_linkedin",
                label: t("form.fanpageIgLinkedin"),
              },
              { value: "meta_ads", label: t("form.metaAds") },
              { value: "vietnamwork", label: t("form.vietnamwork") },
              { value: "itviec", label: t("form.itviec") },
              { value: "email_marketing", label: t("form.emailMarketing") },
              { value: "blog_ktech", label: t("form.blogKtech") },
              { value: "friends", label: t("form.friends") },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="terms"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(t("form.termsError")),
            },
          ]}
        >
          <Checkbox className="text-white/80! text-sm">
            {t("form.termsTitle1")}{" "}
            <Link href={`/${locale}/privacy-policy`}>{t("form.terms")}</Link>{" "}
            {t("form.termsTitle2")}
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            size="large"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-0 font-bold rounded-xl transition-all duration-300 hover:scale-[1.02]"
          >
            {t("form.submit")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
