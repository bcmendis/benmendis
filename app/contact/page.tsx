import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";

const Contact = async () => {
  const users = await db.user.findMany();
  const session = await getAuthSession();
  return (
    <div>
      {users
        ? users.map((user, index) => (
            <div key={index}>
              <span>{user.name}</span>
              <span className="ml-3">{user.role}</span>
            </div>
          ))
        : null}
    </div>
  );
};

export default Contact;
