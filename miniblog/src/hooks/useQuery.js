import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function useQuery(){
    const {search}= useLocation()

    return useMemo(()=>new URLSearchParams(search), [search]) // essa função só vai ser executada quando o search for executado
}