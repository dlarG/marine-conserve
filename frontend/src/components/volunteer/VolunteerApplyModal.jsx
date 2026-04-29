import React, { useState } from "react";
import { X, Upload, Check, AlertCircle, Loader2 } from "lucide-react";

const VolunteerApplyModal = ({ isOpen, onClose, programTitle }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    acknowledgedEmail: false,
  });

  const apiBaseUrl = "http://localhost:5000/api/";
  const [medicalCert, setMedicalCert] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setErrors((prev) => ({
          ...prev,
          medicalCert: "Only PDF files are allowed",
        }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          medicalCert: "File size must be under 5MB",
        }));
        return;
      }
      setMedicalCert(file);
      setErrors((prev) => ({ ...prev, medicalCert: "" }));
    }
  };

  const removeFile = () => {
    setMedicalCert(null);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.acknowledgedEmail) {
      newErrors.acknowledgedEmail = "Please confirm your email is correct";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName.trim());
      formDataToSend.append("email", formData.email.trim());
      formDataToSend.append("programTitle", programTitle);
      formDataToSend.append("message", formData.message.trim());
      formDataToSend.append(
        "acknowledgedPersonalEmail",
        formData.acknowledgedEmail
      );

      if (medicalCert) {
        formDataToSend.append("medicalPdf", medicalCert);
      }

      const response = await fetch(`${apiBaseUrl || ""}/volunteer/apply`, {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setSubmitStatus("success");
        setSubmitMessage(
          result.message || "Application submitted successfully!"
        );
        // Reset form after 2 seconds
        setTimeout(() => {
          handleReset();
        }, 2000);
      } else {
        setSubmitStatus("error");
        setSubmitMessage(result.message || "Failed to submit application.");
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      message: "",
      acknowledgedEmail: false,
    });
    setMedicalCert(null);
    setSubmitStatus(null);
    setSubmitMessage("");
    setErrors({});
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Apply for {programTitle}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Fill out the form below to submit your application
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        {submitStatus === "success" ? (
          <div className="px-6 py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Application Submitted!
            </h3>
            <p className="text-gray-600 max-w-sm mx-auto">{submitMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.fullName
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-teal-500"
                } focus:outline-none focus:ring-2 transition-all text-gray-800`}
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.email
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-teal-500"
                } focus:outline-none focus:ring-2 transition-all text-gray-800`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your interests, availability, or any questions..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all text-gray-800 resize-none"
              />
            </div>

            {/* Medical Certificate Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Medical Certificate (Optional)
              </label>
              {!medicalCert ? (
                <label className="flex flex-col items-center justify-center gap-2 p-6 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-teal-400 hover:bg-teal-50/50 transition-all">
                  <Upload className="w-8 h-8 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    Click to upload PDF
                  </span>
                  <span className="text-xs text-gray-400">
                    Max file size: 5MB
                  </span>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="flex items-center justify-between p-3 bg-teal-50 border border-teal-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100">
                      <Upload className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {medicalCert.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(medicalCert.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-1.5 rounded-lg hover:bg-red-100 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              {errors.medicalCert && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.medicalCert}
                </p>
              )}
            </div>

            {/* Email Confirmation Checkbox */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="acknowledgedEmail"
                  checked={formData.acknowledgedEmail}
                  onChange={handleChange}
                  className="mt-0.5 w-5 h-5 rounded border-gray-300 text-teal-600 focus:ring-teal-500 cursor-pointer"
                />
                <span className="text-sm text-gray-600">
                  I confirm that the email address provided is correct and I can
                  be contacted at this address regarding my application.{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.acknowledgedEmail && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.acknowledgedEmail}
                </p>
              )}
            </div>

            {/* Submit Error */}
            {submitStatus === "error" && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-700">{submitMessage}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-green-600 text-white font-bold hover:from-teal-700 hover:to-green-700 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
export default VolunteerApplyModal;
