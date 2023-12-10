import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddBudget = () => {
  const transactionCollectionRef = collection(db, "budget");
  const { userID } = useGetUserInfo();

  const addBudget = async ({ budgetName, budgetAmount }) => {
    await addDoc(transactionCollectionRef, {
      userID,
      budgetName,
      budgetAmount,
      createdAt: serverTimestamp(),
    });
  };
  return { addBudget };
};
