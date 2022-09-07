import React from "react";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import {
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const donateSchema = Yup.object({
  donorName: Yup.string().required("name is required."),
  donationType: Yup.string().required("donation type required."),
  donorNotes: Yup.string(),
  phone: Yup.string().required("Phone is required."),
  address: Yup.string().required("Address is required."),
  amount: Yup.string(),
});
const initialValues = {
  donorName: "",
  donationType: "",
  donorNotes: "",
  phone: "",
  address: "",
  amount: "",
};
const donationTypes = [
  {
    value: "cash",
    label: "Cash",
  },
  {
    value: "productItem",
    label: "Product/Item",
  },
  {
    value: "service",
    label: "Service",
  },
  {
    value: "other",
    label: "other",
  },
];
const DonationForm = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: donateSchema,
    onSubmit: async (values) => {
      const response = await fetch("http://localhost:1337/api/adddonation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data && response.status === 200) {
        toast.success(data?.message ? data.message : "success");
        navigate("/dashboard");
      } else {
        toast.error(data?.message ? data.message : "success");
      }
    },
  });

  return (
    <>
      {/* <Header /> */}
      <Box sx={{ height: "100vh", width: "100%" }}>
        <div className="container">
          <Box
            sx={{
              backgroundColor: "rgba(0,0,0,0.6)",
              p: 2,

              mt: 5,
              borderRadius: "10px",
              width: "98%",
              maxWidth: "500px",
              boxShadow:
                "1px 1px 13px 20px rgb(202 181 181 / 20%), 0px 4px 5px 0px rgb(234 203 203 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
            }}
          >
            <Stack
              direction="column"
              divider={<Divider orientation="horizontal" flexItem />}
              spacing={2}
            >
              <Stack direction="row" alignItems="center" gap={2}>
                <img src={"donate.png"} width={"70px"} alt="img" />
                <Typography variant="h5">Donation Form</Typography>
              </Stack>
              <Box component={"form"} onSubmit={handleSubmit}>
                <Stack direction="column" alignItems="center" gap={2}>
                  <Stack direction="row" gap={2} width="100%">
                    <FormControl fullWidth>
                      <FormLabel>Donor Name</FormLabel>
                      <OutlinedInput
                        placeholder="enter name"
                        name="donorName"
                        value={values.donorName}
                        onChange={handleChange}
                        error={touched.donorName && Boolean(errors.donorName)}
                      />
                      <FormHelperText className="font-red">
                        {touched.donorName && errors.donorName}
                      </FormHelperText>
                    </FormControl>
                    <FormControl fullWidth>
                      <FormLabel>Type of Donation</FormLabel>
                      <Select
                        value={values.donationType}
                        name="donationType"
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                        onChange={handleChange}
                        error={
                          touched.donationType && Boolean(errors.donationType)
                        }
                      >
                        {donationTypes.map((v, i) => (
                          <MenuItem value={v.value} key={i}>
                            {v.label}
                          </MenuItem>
                        ))}
                      </Select>
                      <FormHelperText className="font-red">
                        {touched.donationType && errors.donationType}
                      </FormHelperText>
                    </FormControl>
                  </Stack>
                  {values.donationType === "cash" && (
                    <FormControl sx={{ width: "100%" }}>
                      <FormLabel>Amount</FormLabel>
                      <OutlinedInput
                        placeholder="amount"
                        name="amount"
                        value={values.amount}
                        onChange={handleChange}
                        error={touched.amount && Boolean(errors.amount)}
                      />
                      <FormHelperText className="font-red">
                        {touched.amount && errors.amount}
                      </FormHelperText>
                    </FormControl>
                  )}
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel>Donor Note</FormLabel>
                    <OutlinedInput
                      placeholder="Donor note"
                      value={values.donorNotes}
                      name="donorNotes"
                      rows={3}
                      multiline
                      onChange={handleChange}
                      error={touched.donorNotes && Boolean(errors.donorNotes)}
                    />
                    <FormHelperText className="font-red">
                      {touched.donorNotes && errors.donorNotes}
                    </FormHelperText>
                  </FormControl>
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel>Phone</FormLabel>
                    <OutlinedInput
                      placeholder="phone"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      error={touched.phone && Boolean(errors.phone)}
                    />
                    <FormHelperText className="font-red">
                      {touched.phone && errors.phone}
                    </FormHelperText>
                  </FormControl>
                  <FormControl sx={{ width: "100%" }}>
                    <FormLabel>Address</FormLabel>
                    <OutlinedInput
                      placeholder="Enter address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      error={touched.address && Boolean(errors.address)}
                    />
                    <FormHelperText className="font-red">
                      {touched.address && errors.address}
                    </FormHelperText>
                  </FormControl>

                  <button className="button" style={{ top: "0" }}>
                    DONATE
                  </button>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </div>
        {/* <ToastContainer /> */}
      </Box>
    </>
  );
};

export default DonationForm;
