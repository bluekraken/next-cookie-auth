import { useEffect, useState } from "react";

import Layout from "../components/Layout";

import { authInitialProps, getUserProfile } from "../lib/auth";

const Profile = (props) => {
  const [user, setUser] = useState({ user: null });

  useEffect(() => {
    getUserProfile().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <Layout title="Profile" {...props}>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  );
};

Profile.getInitialProps = authInitialProps(true);

export default Profile;
