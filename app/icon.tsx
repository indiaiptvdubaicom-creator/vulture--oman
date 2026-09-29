import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#100c0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#deae62",
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        V
      </div>
    ),
    { ...size },
  );
}
