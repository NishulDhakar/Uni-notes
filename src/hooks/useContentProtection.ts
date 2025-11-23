import { useEffect } from "react";

export default function useContentProtection() {
  useEffect(()=>{
    function onCopy(e: ClipboardEvent){ e.preventDefault(); e.stopPropagation(); }
    function onContext(e: MouseEvent){ e.preventDefault(); }
    function onKey(e: KeyboardEvent){
      const combo = (e.ctrlKey||e.metaKey) && (e.key === "c" || e.key === "C");
      if(combo) { e.preventDefault(); e.stopPropagation(); }
    }

    document.addEventListener("copy", onCopy);
    document.addEventListener("contextmenu", onContext);
    document.addEventListener("keydown", onKey);

    return ()=>{
      document.removeEventListener("copy", onCopy);
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
}
