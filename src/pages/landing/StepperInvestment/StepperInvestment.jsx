import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";

const steps = [
  "ثبت نام در سجام ",
  "افتتاح حساب غیر حضوری",
  "ارسال دسترسی و شروع معاملات",
];

export default function StepperInvestment() {
  const isStepFailed = (step: number) => {
    return step === 1;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <h2> شروع سرمایه گذاری </h2>
      <Stepper activeStep={1}>
        {steps.map((label, index) => {
          const labelProps: {
            optional?: React.ReactNode,
            error?: boolean,
          } = {};
          if (isStepFailed(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Alert message
              </Typography>
            );
            labelProps.error = true;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
