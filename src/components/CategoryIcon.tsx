interface CategoryIconProps {
  type: string;
  size?: "sm" | "md";
}

const CategoryIcon = ({ type, size = "sm" }: CategoryIconProps) => {
  const sizeClass = size === "md" ? "w-7 h-7" : "w-6 h-6";

  if (type === "android") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={`${sizeClass} flex-shrink-0 fill-current`}>
        <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className={`${sizeClass} flex-shrink-0 fill-current`}>
      <path d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z" />
    </svg>
  );
};

export default CategoryIcon;
