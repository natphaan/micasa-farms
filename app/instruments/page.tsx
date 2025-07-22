import { createClient } from "@/lib/supabase/server";

export default async function Instruments() {
  const supabase = await createClient();

  // Query the 'test_items' table 
  const { data, error } = await supabase.from("test_items").select();

  // This will log any potential errors to your server terminal
  if (error) {
    console.error("Error fetching test_items:", error);
  }

  return (
    <pre>
      {/* Display the fetched data on the page */}
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}