import { Box } from "@mui/material";
import React from "react";
import { NumberTicker } from "../../components/number-ticker";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../constants";

type StickerStatsResponse = {
  success: boolean;
  packUsage: {
    pack_id: string;
    datetime: string;
    total_usage: number;
    total_installed: number;
    total_removed: number;
  };
};

export const StickerStats = (): React.ReactElement => {
  const packUsageQuery = useQuery({
    queryKey: ["packUsage"],
    queryFn: async () => {
      const res = await fetch(new URL("/api/pack-usage/371151432834875396", API_URL).href);

      return (await res.json()) as StickerStatsResponse;
    },
    refetchInterval: 30000,
  });

  const [oldPackUsage, setOldPackUsage] = React.useState(0);
  const [packUsage, setPackUsage] = React.useState(0);

  React.useEffect(() => {
    if (packUsageQuery.status === "success" && packUsageQuery.data.packUsage.total_usage !== packUsage) {
      setOldPackUsage(packUsage);
      setPackUsage(packUsageQuery.data.packUsage.total_usage);
    }
  }, [packUsageQuery.status, packUsageQuery.data, packUsage, oldPackUsage]);

  return (
    <Box sx={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      {packUsageQuery.status === "success" ? (
        <NumberTicker startValue={oldPackUsage} endValue={packUsageQuery.data.packUsage.total_usage} textSize="min(16vw, 16rem)" />
      ) : (
        <></>
      )}
    </Box>
  );
};

export default StickerStats;
