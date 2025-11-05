import { useState, type FormEvent } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";
import { colors } from "../config/theme";
import { LINKS } from "../config/constants";

// Shared TextField styling
const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    color: colors.text.primary,
    "& fieldset": {
      borderColor: `${colors.cyan}44`,
    },
    "&:hover fieldset": {
      borderColor: `${colors.cyan}88`,
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.cyan,
    },
  },
  "& .MuiInputLabel-root": {
    color: colors.text.primary,
    "&.Mui-focused": {
      color: colors.cyan,
    },
  },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Timeout after 10 seconds
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Request timeout")), 10000)
      );

      const emailPromise = emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      await Promise.race([emailPromise, timeoutPromise]);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
      }}
    >
      <TextField
        label="Your Name"
        variant="outlined"
        required
        fullWidth
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        sx={textFieldSx}
      />

      <TextField
        label="Your Email"
        variant="outlined"
        type="email"
        required
        fullWidth
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        sx={textFieldSx}
      />

      <TextField
        label="Message"
        variant="outlined"
        required
        fullWidth
        multiline
        rows={5}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        sx={textFieldSx}
      />

      {status === "success" && (
        <Alert severity="success" sx={{ bgcolor: `${colors.cyan}22`, color: colors.text.primary }}>
          Message sent successfully! I'll get back to you soon.
        </Alert>
      )}

      {status === "error" && (
        <Alert severity="error">
          Failed to send message. Please email me directly at {LINKS.EMAIL}
        </Alert>
      )}

      <Button
        type="submit"
        variant="outlined"
        disabled={status === "sending"}
        endIcon={<SendIcon />}
        sx={{
          color: colors.cyan,
          borderColor: colors.cyan,
          fontWeight: "bold",
          py: 1.5,
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: `${colors.cyan}22`,
            borderColor: colors.cyan,
            boxShadow: `0 0 20px ${colors.cyan}66`,
            transform: "scale(1.02)",
          },
          "&:disabled": {
            color: `${colors.cyan}66`,
            borderColor: `${colors.cyan}44`,
          },
        }}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      <Typography variant="caption" sx={{ textAlign: "center", color: colors.text.primary, opacity: 0.7 }}>
        Or email me directly at {LINKS.EMAIL}
      </Typography>
    </Box>
  );
}
