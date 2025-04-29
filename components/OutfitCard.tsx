import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ShirtIcon } from "lucide-react"; // Optional: You can use any Lucide icon

export function OutfitCard({ outfit }: { outfit: string }) {
  // Split the outfit string into an array based on commas
  const outfitItems = outfit.split(",").map((item) => item.trim());

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl transition-all">
      <CardHeader className="flex items-center gap-2 pb-0">
        <ShirtIcon className="text-blue-500 dark:text-blue-300" />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Recommended Outfit
        </h3>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="text-lg text-gray-700 dark:text-gray-300">
          {/* Map over the outfitItems and render each on a new line */}
          {outfitItems.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
