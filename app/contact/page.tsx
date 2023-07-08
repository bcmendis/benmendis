import { db } from "@/lib/db";

const Contact = async () => {
  const users = await db.user.findMany();
  return <div>
    {users? users.map((user, index) => <p key={index}>{user.name}</p>) : null}
  </div>;
};

export default Contact;
