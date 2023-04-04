import Cookies from "js-cookie";
import backendClient from "../services/backend-client";

interface Props {
  lessonId: Number;
  course: string;
}

const updateUserStatus = async ({ lessonId, course }: Props) => {
  const userId = Cookies.get("hash");

  try {
    const response = await backendClient.put("/update", {
      userId: userId,
      course: course,
      num: lessonId,
    });

    console.log(response.data);
  } catch (error) {
    console.error("Error updating user status:", error);
  }
};

export default updateUserStatus;
