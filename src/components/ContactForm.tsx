import { useState, type FormEvent } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";
import { colors } from "../config/theme";

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
      const SERVICE_ID = "service_bkz8t7t";
      const TEMPLATE_ID = "template_f7ouzie";
      const PUBLIC_KEY = "11P66NXnd67CPLfiQ";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

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
        sx={{
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
        }}
      />

      <TextField
        label="Your Email"
        variant="outlined"
        type="email"
        required
        fullWidth
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        sx={{
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
        }}
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
        sx={{
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
        }}
      />

      {status === "success" && (
        <Alert severity="success" sx={{ bgcolor: `${colors.cyan}22`, color: colors.text.primary }}>
          Message sent successfully! I'll get back to you soon.
        </Alert>
      )}

      {status === "error" && (
        <Alert severity="error">
          Failed to send message. Please email me directly at kgoel9657@gmail.com
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
        Or email me directly at kgoel9657@gmail.com
      </Typography>
    </Box>
  );
}
