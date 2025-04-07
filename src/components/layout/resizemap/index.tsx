import { useEffect } from "react";
import { useMap } from "react-leaflet";

function ResizeMapOnShow({ visible }: { visible: boolean }) {
  const map = useMap();

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        map.invalidateSize(); // força o recalculo do tamanho
      }, 300); // pequeno delay ajuda quando há animações
    }
  }, [visible, map]);

  return null;
}

export default ResizeMapOnShow;
