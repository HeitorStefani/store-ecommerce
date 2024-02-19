import { Category } from "@/types";

const URL = `http://localhost:3000/api/4a3f05d2-64dd-424b-aa0d-faed278701cc/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL);
    
    // Verifica se a resposta foi bem-sucedida
    if (!res.ok) {
      const text = await res.text(); // obtém o corpo da resposta como texto
      console.error('Response status:', res.status);
      console.error('Response text:', text);
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log('Busca bem-sucedida! Quantidade de itens:', data.length); // imprime a quantidade de itens
    return data;
  } catch (err) {
    console.error(err);
    throw err; // Lança o erro para ser tratado pelo chamador
  }
};

export default getCategories;
