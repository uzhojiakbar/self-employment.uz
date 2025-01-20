import { useMutation } from "@tanstack/react-query";
import { instance } from "../api/api";
import toast from "react-hot-toast";
import { delCookie, setCookie } from "./cookieHook";
import { useNavigate } from "react-router-dom";

export const useSignIn = (onSuccess, onError) => {
  return useMutation({
    mutationFn: (data) => instance.post("/api/auth/login/", data), // API ga so'rov yuborish
    onSuccess: (data) => {
      console.log(data?.data);

      setCookie("access", data?.data?.token);
      setCookie("login", true);
      setCookie("role", data?.data?.role);
      setCookie("username", data?.data?.username);

      if (onSuccess) {
        onSuccess();
      }
    },
    onError: (error) => {
      console.log(error);
      if (onError) {
        onError(error); // Agar onError berilgan bo'lsa, chaqiramiz
      } else {
        toast.error(
          "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
        );
      }
    },
  });
};

export const addBuilding = (onSuccess, onError) => {
  return useMutation({
    mutationFn: (data) => instance.post("/api/buildings", data),
    onSuccess: (data) => {
      console.log(data?.data);

      if (onSuccess) {
        onSuccess();
      }
    },
    onError: (error) => {
      console.log(error);
      if (onError) {
        onError(error); // Agar onError berilgan bo'lsa, chaqiramiz
      } else {
        toast.error(
          "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
        );
      }
    },
  });
};

export const getBuilding = (onSuccess, onError) => {
  return useMutation({
    mutationFn: () => instance.get("/api/buildings"),
    onSuccess: (data) => {
      console.log(data?.data);

      if (onSuccess) {
        onSuccess();
      }
    },
    onError: (error) => {
      console.log(error);
      if (onError) {
        onError(error);
      } else {
        toast.error(
          "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
        );
      }
    },
  });
};

export const useLogOut = () => {
  const navigate = useNavigate(); // navigate hook dan foydalanamiz

  const logOut = () => {
    try {
      delCookie("access");
      delCookie("login");

      toast.success("Hisobdan muvaffaqiyatli chiqdingiz!");
      navigate("/login");
    } catch (error) {
      toast.error("Chiqishda qandaydur xatolik yuz berdi.");
      console.log(error);
    }
  };

  return logOut; // logOut funksiyasini qaytaramiz
};
