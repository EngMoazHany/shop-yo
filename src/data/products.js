export const products = [
  /* ================= 1) Air pods bag ================= */
  {
    id: "1",
    name: "Air pods bag",
    brand: "Louis Vuitton",
    price: 1500,           // السعر الأصلي
    discountPrice: 1500,   // لا خصم
    discount: 0,
    category: "Accessories",
    // حط صورة حقيقية هنا بدل الرابط التجريبي
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=800&q=80",
    colors: ["Brown"],
    size: null,
    code: "950-2",
    box: true,
    description:
      "Luxury AirPods bag crafted with premium materials and iconic Louis Vuitton style.",
  },

  /* ================= 2) Gucci Ophidia small tote ================= */
  {
    id: "2",
    name: "Ophidia Small Tote",
    brand: "Gucci",
    price: 2800,
    discountPrice: 2800,
    discount: 0,
    category: "Bags",
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=800&q=80",
    colors: ["Brown"],     // مذكور Brown في القائمة الأصلية
    size: "22 x 18 cm",
    code: "05789",
    box: true,
    description:
      "Classic Gucci Ophidia tote with signature GG canvas and elegant finish.",
  },

  /* ================= 3) Gucci Trimmed leather bucket ================= */
  {
    id: "3",
    name: "Trimmed Leather Bucket",
    brand: "Gucci",
    price: 3000,
    discountPrice: 1500,   // بعد الخصم
    discount: 50,
    category: "Bags",
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=800&q=80",
    colors: ["Black", "White"], // الألوان المتاحة فقط أسود و أبيض
    size: "23 x 20 cm",
    code: "782908",
    box: true,
    description:
      "Luxury trimmed leather bucket bag with minimalist silhouette and premium feel.",
  },

  /* ================= 4) Gucci GG Marmont Handle Bag ================= */
{
  id: "4",
  name: "GG Marmont Handle Bag",
  brand: "Gucci",
  price: 4000,
  discountPrice: 2000,
  discount: 50,
  category: "Bags",

  images: {
    White:
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=800&q=80",
    Black:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    Beige:
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23?auto=format&fit=crop&w=800&q=80",
    Gray:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=800&q=80",
  },

  colors: ["White", "Black", "Beige", "Gray"],
  size: "34 x 17 cm",
  code: "795218",
  box: true,
  description:
    "Iconic GG Marmont handle bag with bold structure and timeless Gucci elegance.",
}

];
