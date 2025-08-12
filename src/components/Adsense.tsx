import styled from "@emotion/styled";
// import { useEffect } from "react";
const MainContainer = styled.div`
  display: block;
`;
function Adsense() {
  //   useEffect(() => {
  //     const pushAd = () => {
  //       try {
  //         const adsbygoogle = window.adsbygoogle;
  //         // console.log({ adsbygoogle })
  //         adsbygoogle.push({});
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     };

  //     const interval = setInterval(() => {
  //       // Check if Adsense script is loaded every 300ms
  //       if (window.adsbygoogle) {
  //         pushAd();
  //         // clear the interval once the ad is pushed so that function isn't called indefinitely
  //         clearInterval(interval);
  //       }
  //     }, 300);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);
  return (
    <MainContainer
      data-ad-client={"pub-8325191344945577"}
      data-ad-slot=""
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></MainContainer>
  );
}

export default Adsense;
