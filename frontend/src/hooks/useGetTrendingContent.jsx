import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const useGetTrendingContent = () => {
  const [trendingContent, setTrendingContent] = useState(null);
  const { contentType } = useContentStore();

  useEffect(() => {
    const getTrendingContent = async () => {
      const res = await axios.get(
        `${apiUrl}useGetTrendingContent/api/v1/${contentType}/trending`
      );
      setTrendingContent(res.data.content);
    };

    getTrendingContent();
  }, [contentType]);

  return { trendingContent };
};
export default useGetTrendingContent;
