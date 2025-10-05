// Fungsi untuk mengambil data artikel dari API
export async function getArticles() {
  try {
    const res = await fetch("http://localhost:8001/api/test/articles");
    if (!res.ok) throw new Error("Gagal mengambil data artikel");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}
