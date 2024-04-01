import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";

export const useJapan = create((set, get) => ({
  animeList: [],

  getAnimeList: async () => {
    try {
      await axios
        .get("https://kitsu.io/api/edge/anime")
        .then((result) => {
          console.log(result.data.data);

          if (result.status === 200) {
            set({ getAnimeList: result.data.data });
          }
        })
        .catch((err) => {
          toast.error(err, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
        });
    } catch (err) {
      console.log(err);
    }
  },
}));
