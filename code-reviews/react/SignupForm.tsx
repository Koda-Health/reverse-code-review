import { useState } from "react";

function Input({ ...args }) {
  return <input {...args} />;
}

interface SignupFormProps {
  onSubmit: any;
  /** Can be "admin" or "customer" */
  userType: string;
}

export default function SignupForm(props: SignupFormProps) {
  const [email, setEmail] = useState();
  const [fn, setFn] = useState();
  const [lastName, setLastName] = useState();
  const [dob, setDob] = useState();
  const [password, setPassword] = useState();
  const [employeeId, setEmployeeId] = useState();

  return (
    <>
      <h1>{props?.userType === "admin" ? "Admin Login" : "User Login"}</h1>
      <label>First Name</label>
      <Input value={fn} onChange={(e) => setFn(e?.target?.value)} />
      <label>Last Name</label>
      <Input value={lastName} onChange={(e) => setLastName(e?.target?.value)} />
      {/* Admins have one field that is requiree for their signup */}
      {props?.userType === "admin" && (
        <>
          <label>Employee ID</label>
          <Input
            value={employeeId}
            onChange={(e) => setEmployeeId(e?.target?.value)}
          />
        </>
      )}
      <label>DOB</label>
      <Input value={dob} onChange={(e) => setDob(e?.target?.value)} />
      {/* <label>Favorite Color</label>
      <Input value={favoriteColor} onChange={(e) => setFavoriteColor(e?.target?.value)} /> */}
      <label>Email</label>
      <Input value={email} onChange={(e) => setEmail(e?.target?.value)} />
      <label>Password</label>
      <Input
        value={password}
        htmlType="password"
        onChange={(e) => setPassword(e?.target?.value)}
      />
      <button
        onClick={() => {
          if (props?.userType === "admin" && !employeeId) {
            return alert("Admin users must input their employeeId");
          }

          if (!fn) {
            alert("Needs an first name");
          } else if (!lastName) {
            alert("Needs a last name");
          } else if (!email) {
            alert("Needs an email");
          } else if (!email) {
            alert("Needs a password");
          }

          props.onSubmit({
            firstName: fn,
            lastName,
            email,
            password,
          });
        }}
      >
        Submit
      </button>
    </>
  );
}
