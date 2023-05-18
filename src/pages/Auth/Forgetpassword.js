import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Box } from "../Styled";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

export default function Forgetpassword() {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setanswer] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://ecommerce-wj5h.onrender.com/api/forget-password",
        {
          email,
          newPassword,
          answer,
        }
      );

      if (res.data.success) {
        toast.success("User Login successfull");

        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <Box>
        <Form
          onSubmit={login}
          className="shadow-lg p-3 mt-3 rounded registerform"
        >
          <h1 className="shadow-sm text-primary p-3 text-center rounded headingh1">
            Forgot Password
          </h1>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Enter your New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter your favorite sport"
              value={answer}
              onChange={(e) => setanswer(e.target.value)}
            />
          </Form.Group>

          <div className="d-flex flex-column">
            <Button type="submit">Reset</Button>
          </div>
        </Form>
      </Box>
    </Layout>
  );
}
