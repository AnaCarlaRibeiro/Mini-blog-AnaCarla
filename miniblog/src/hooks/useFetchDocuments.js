import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";

export const useFetchDocuments = (docColletion, search = null, uid = null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadData() {
      if (cancelled) return;
      setLoading(true);

      const collectionRef = await collection(db, docColletion);

      try {
        let q;

        if (search) {
          q = await query(
            collectionRef,
            where("tags", "array-contains", search),
            orderBy("createdAt", "desc")
          );
        } else if(uid){
          q = await query(
            collectionRef,
            where("uid", "==", uid),
            orderBy("createdAt", "desc")
          );

        } else {
          q = await query(collectionRef, orderBy("createdAt", "desc")); // ordenando os mais novos posts primeiro
        }

        await onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
        setLoading(false);
      } catch (error) {
        console.log(error);

        setError(error.message);
        setLoading(false);
      }
    }
    loadData();
  }, [docColletion, search, uid, cancelled]);

  //useEffect necessário para que os dados não sejam carregados novamente quando ele desmontar, só remonta quando precisar montar de novo
  useEffect(() => {
    return () => setCancelled(true);
  }, []);
  return { documents, loading, error };
};
