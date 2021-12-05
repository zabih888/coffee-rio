import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "@mui/material";

const FaqHome = () => {
  const matchesTablet = useMediaQuery("(min-width: 768px)");
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ direction: "rtl" }} className="container">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{ width: !matchesTablet ? "90%" : "33%", flexShrink: 0 }}
          >
            آیا روست قهوه‌های شما تازه است؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            بله، حجم فروش ما اجازه نگهداری قهوه رست شده نمی دهد و کارخانه ریو
            روزانه قهوه مورد نیاز را رست می کند، پس رست تمام قهوه‌های ریو تازه
            است.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{ width: !matchesTablet ? "90%" : "33%", flexShrink: 0 }}
          >
            قهوه آسیاب شده بخریم یا قهوه دانه؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            اگر در منزل یا محل کارتان آسیاب برای پودر کردن قهوه دارید یا تمایل
            به خرید آسیاب دارید، قهوه دانه خریداری کنید و در غیر اینصورت قهوه
            آسیاب شده تهیه کنید. خرید قهوه ی دانه، به حفظ تازگی و رایحه ی آن در
            هنگام مصرف کمک می کند.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{ width: !matchesTablet ? "90%" : "33%", flexShrink: 0 }}
          >
            ماندگاری قهوه از زمانی كه درب آن باز شود چه مدت است؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            قهوه ماده خوراکی فاسد شدنی نیست و ماندگاری زیادی دارد، اما مزیت
            نوشیدنی قهوه به عطر و طعم آن است. بهتر است قهوه بعد از آسیاب شدن در
            محفظه خشک مانند شیشه یا فلز قرار بگیرد و درب آن محکم شود تا در معرض
            اکسیژن قرار نگیرد. با گذشت زمان خواص و میزان کافئین قهوه تغییری نمی
            کند اما پایداری طعم و عطر آن رابطه مستقیم با زمان دارد. پیشنهاد می
            کنیم حجم خرید خود را با میزان مصرفتان در زمان کمتر از یک ماه تنظیم
            کنیم تا از نوشیدن قهوه با عطر و طعم مناسب لذت ببرید.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography
            sx={{ width: !matchesTablet ? "90%" : "33%", flexShrink: 0 }}
          >
            سفارشات اینترنتی من چه زمانی به دستم می رسد؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            اگر ساکن تهران هستید، سفارشات شما در همان روز یا روز بعد از تکمیل
            سفارش با هماهنگی قبلی به دست شما می رسد. اگر ساکن شهرستان هستید،
            سفارش شما در پکیج مخصوص ریو قرار می گیرد تا آسیب نبیند و از طریق پست
            پیشتاز، یا تیپاکس ارسال و ظرف ۴۸ ساعت به دستتان می رس
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{ width: !matchesTablet ? "90%" : "33%", flexShrink: 0 }}
          >
            چه قهوه هایی مناسب اسپرسو و موکاپات هستند؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            مهمترین نکته در نوع آسیاب قهوه مدنظر شماست. اگر قهوه شما آسیاب درشتی
            داشته باشد، مناسب قهوه سازهای دمی است که مناسب دستگاه موکاپات نیز می
            باشد. و اگر دانه ریز و پودری شکل آسیاب شده باشد به درد اسپرسو خواهد
            خورد.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FaqHome;
