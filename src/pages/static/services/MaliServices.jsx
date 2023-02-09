import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

function MaliServices() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <Box>
      <Box>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab className="tabTypographyVertical" label="اوراق خرید دین" />
          <Tab className="tabTypographyVertical" label="اوراق رهنی" />
          <Tab className="tabTypographyVertical" label="اوراق سفارش ساخت" />
          <Tab className="tabTypographyVertical" label="اوراق صکوک اجاره" />
          <Tab className="tabTypographyVertical" label="اوراق منفعت" />
          <Tab className="tabTypographyVertical" label="افزایش سرمایه" />
          <Tab className="tabTypographyVertical" label="صکوک مرابحه" />
          <Tab className="tabTypographyVertical" label="مشارکت" />
          <Tab className="tabTypographyVertical" label="مقایسه اوراق" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
            <Typography className="textBody">The first tab</Typography>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Typography className="textBody">The second tab</Typography>
          </Box>
        )}

        {tabIndex === 2 && (
          <Box>
            <Typography className="textBody">The third tab</Typography>
          </Box>
        )}

        {tabIndex === 3 && (
          <Box>
            <Typography className="textBody">The third tab</Typography>
          </Box>
        )}
        {tabIndex === 4 && (
          <Box>
            <Typography className="textBody">The third tab</Typography>
          </Box>
        )}

        {tabIndex === 5 && (
          <Box>
            <Typography className="textBody">The third tab</Typography>
          </Box>
        )}

        {tabIndex === 6 && (
          <Box>
            <Typography className="textBody">The third tab</Typography>
          </Box>
        )}

        {tabIndex === 7 && (
          <Box>
            <Typography className="textBody">The third tab</Typography>
          </Box>
        )}

        {tabIndex === 8 && (
          <Box>
            <Typography className="textBody">The third tab</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default MaliServices;
