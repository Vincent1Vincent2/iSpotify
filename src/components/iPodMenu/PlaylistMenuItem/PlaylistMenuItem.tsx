import "../styles.css";

export default function PlaylistMenuItem() {
  return (
    <svg
      className="MenuItem"
      width="280"
      height="50"
      viewBox="-5 0 280 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="PlaylistMenuItem">
        <rect
          className="ItemBase"
          width="275"
          height="26"
          fill="white"
          fill-opacity="0.01"
        />
        <path
          className="ChevronRight"
          d="M264.059 14.0566L264.081 14.0349L264.09 14.0266L264.617 13.5001L260.365 9.24826L260.249 9.36387L263.621 12.7358C264.043 13.1576 264.043 13.8415 263.621 14.2633L260.248 17.6361L260.364 17.7517L264.059 14.0566ZM265.04 13.9239L265.04 13.9234C265.04 13.9236 265.04 13.9237 265.04 13.9239L265.464 13.5001L265.04 13.9239Z"
          fill="#171717"
          stroke="black"
          stroke-width="2"
        />
        <path
          className="MenuText"
          d="M13.1196 15.1108H10.373V13.5288H13.1196C13.5688 13.5288 13.9326 13.4556 14.2109 13.3091C14.4941 13.1577 14.7017 12.9526 14.8335 12.6938C14.9653 12.4302 15.0312 12.1299 15.0312 11.793C15.0312 11.4658 14.9653 11.1606 14.8335 10.8774C14.7017 10.5942 14.4941 10.3647 14.2109 10.189C13.9326 10.0132 13.5688 9.92529 13.1196 9.92529H11.0322V19H9.01807V8.33594H13.1196C13.9497 8.33594 14.6577 8.48486 15.2437 8.78271C15.8345 9.07568 16.2837 9.4834 16.5913 10.0059C16.9038 10.5234 17.0601 11.1143 17.0601 11.7783C17.0601 12.4668 16.9038 13.0601 16.5913 13.5581C16.2837 14.0562 15.8345 14.4395 15.2437 14.708C14.6577 14.9766 13.9497 15.1108 13.1196 15.1108ZM20.5464 7.75V19H18.6055V7.75H20.5464ZM26.7573 17.3154V13.6606C26.7573 13.3921 26.7109 13.1602 26.6182 12.9648C26.5254 12.7695 26.3838 12.6182 26.1934 12.5107C26.0029 12.4033 25.7612 12.3496 25.4683 12.3496C25.2095 12.3496 24.9824 12.3936 24.7871 12.4814C24.5967 12.5693 24.4502 12.6938 24.3477 12.855C24.2451 13.0112 24.1938 13.1919 24.1938 13.397H22.2529C22.2529 13.0698 22.3311 12.7598 22.4873 12.4668C22.6436 12.1689 22.8657 11.9053 23.1538 11.6758C23.4468 11.4414 23.7959 11.2583 24.2012 11.1265C24.6113 10.9946 25.0703 10.9287 25.5781 10.9287C26.1787 10.9287 26.7134 11.0312 27.1821 11.2363C27.6558 11.4365 28.0269 11.7393 28.2954 12.1445C28.5688 12.5498 28.7056 13.0601 28.7056 13.6753V17.1323C28.7056 17.5278 28.73 17.8672 28.7788 18.1504C28.8325 18.4287 28.9106 18.6704 29.0132 18.8755V19H27.043C26.9502 18.7998 26.8794 18.5459 26.8306 18.2383C26.7817 17.9258 26.7573 17.6182 26.7573 17.3154ZM27.0283 14.1733L27.043 15.3232H25.8198C25.5171 15.3232 25.251 15.355 25.0215 15.4185C24.792 15.4771 24.604 15.5649 24.4575 15.6821C24.311 15.7944 24.2012 15.9312 24.1279 16.0923C24.0547 16.2485 24.0181 16.4268 24.0181 16.627C24.0181 16.8223 24.062 16.998 24.1499 17.1543C24.2427 17.3105 24.3745 17.4351 24.5454 17.5278C24.7212 17.6157 24.9263 17.6597 25.1606 17.6597C25.5024 17.6597 25.8003 17.5913 26.0542 17.4546C26.3081 17.313 26.5059 17.1421 26.6475 16.9419C26.7891 16.7417 26.8647 16.5513 26.8745 16.3706L27.4312 17.2056C27.3628 17.4058 27.2603 17.6182 27.1235 17.8428C26.9868 18.0674 26.811 18.2773 26.5962 18.4727C26.3813 18.668 26.1226 18.8291 25.8198 18.9561C25.5171 19.083 25.1655 19.1465 24.7651 19.1465C24.2524 19.1465 23.7935 19.0439 23.3882 18.8389C22.9829 18.6338 22.6631 18.353 22.4287 17.9966C22.1943 17.6401 22.0771 17.2349 22.0771 16.7808C22.0771 16.3608 22.1553 15.9897 22.3115 15.6675C22.4678 15.3452 22.6997 15.0742 23.0073 14.8545C23.3149 14.6299 23.6958 14.4614 24.1499 14.3491C24.6089 14.2319 25.1338 14.1733 25.7246 14.1733H27.0283ZM32.6533 18.1211L34.7773 11.0752H36.8501L33.6714 20.2012C33.5981 20.3965 33.5029 20.6089 33.3857 20.8384C33.2734 21.0679 33.1221 21.2852 32.9316 21.4902C32.7412 21.7002 32.502 21.8711 32.2139 22.0029C31.9307 22.1348 31.5864 22.2007 31.1812 22.2007C31.0054 22.2007 30.8491 22.1885 30.7124 22.1641C30.5757 22.1396 30.4316 22.1079 30.2803 22.0688V20.6187C30.3291 20.6235 30.3853 20.626 30.4487 20.626C30.5171 20.6309 30.5757 20.6333 30.6245 20.6333C30.9077 20.6333 31.1421 20.5991 31.3276 20.5308C31.5132 20.4673 31.6621 20.3623 31.7744 20.2158C31.8916 20.0742 31.9893 19.8887 32.0674 19.6592L32.6533 18.1211ZM31.606 11.0752L33.4004 16.9126L33.7153 18.9561L32.3823 19.1978L29.5186 11.0752H31.606ZM39.8384 7.75V19H37.8975V7.75H39.8384ZM43.7349 11.0752V19H41.7939V11.0752H43.7349ZM41.6621 9.00244C41.6621 8.71436 41.7598 8.4751 41.9551 8.28467C42.1553 8.09424 42.4238 7.99902 42.7607 7.99902C43.0977 7.99902 43.3638 8.09424 43.5591 8.28467C43.7593 8.4751 43.8594 8.71436 43.8594 9.00244C43.8594 9.28564 43.7593 9.52246 43.5591 9.71289C43.3638 9.90332 43.0977 9.99854 42.7607 9.99854C42.4238 9.99854 42.1553 9.90332 41.9551 9.71289C41.7598 9.52246 41.6621 9.28564 41.6621 9.00244ZM49.9385 16.832C49.9385 16.666 49.8945 16.5171 49.8066 16.3853C49.7188 16.2534 49.5527 16.1338 49.3086 16.0264C49.0693 15.9141 48.7178 15.8091 48.2539 15.7114C47.8438 15.6235 47.4653 15.5137 47.1187 15.3818C46.772 15.25 46.4741 15.0913 46.2251 14.9058C45.9761 14.7153 45.7808 14.4932 45.6392 14.2393C45.5024 13.9805 45.4341 13.6826 45.4341 13.3457C45.4341 13.0186 45.5049 12.7109 45.6465 12.4229C45.7881 12.1299 45.9932 11.8735 46.2617 11.6538C46.5303 11.4292 46.8574 11.2534 47.2432 11.1265C47.6289 10.9946 48.0635 10.9287 48.5469 10.9287C49.2207 10.9287 49.7993 11.0386 50.2827 11.2583C50.771 11.478 51.1445 11.7808 51.4033 12.1665C51.6621 12.5474 51.7915 12.9771 51.7915 13.4556H49.8579C49.8579 13.2456 49.8091 13.0552 49.7114 12.8843C49.6187 12.7134 49.4746 12.5767 49.2793 12.4741C49.084 12.3667 48.8374 12.313 48.5396 12.313C48.271 12.313 48.0439 12.3569 47.8584 12.4448C47.6777 12.5327 47.541 12.6475 47.4482 12.7891C47.3555 12.9307 47.3091 13.0869 47.3091 13.2578C47.3091 13.3848 47.3335 13.4995 47.3823 13.6021C47.436 13.6997 47.5215 13.79 47.6387 13.873C47.7559 13.9561 47.9146 14.0317 48.1147 14.1001C48.3198 14.1685 48.5713 14.2344 48.8691 14.2979C49.46 14.415 49.9751 14.5713 50.4146 14.7666C50.8589 14.957 51.2056 15.2109 51.4546 15.5283C51.7036 15.8457 51.8281 16.251 51.8281 16.7441C51.8281 17.0957 51.7524 17.418 51.6011 17.7109C51.4497 17.999 51.23 18.2505 50.9419 18.4653C50.6538 18.6802 50.3096 18.8486 49.9092 18.9707C49.5088 19.0879 49.0571 19.1465 48.5542 19.1465C47.8267 19.1465 47.2114 19.0171 46.7085 18.7583C46.2056 18.4946 45.8247 18.1626 45.5659 17.7622C45.3071 17.3569 45.1777 16.937 45.1777 16.5024H47.0308C47.0454 16.8101 47.1284 17.0566 47.2798 17.2422C47.4312 17.4277 47.6216 17.562 47.8511 17.645C48.0854 17.7231 48.332 17.7622 48.5908 17.7622C48.8838 17.7622 49.1304 17.7231 49.3306 17.645C49.5308 17.562 49.6821 17.4521 49.7847 17.3154C49.8872 17.1738 49.9385 17.0127 49.9385 16.832ZM57.0503 11.0752V12.4668H52.5093V11.0752H57.0503ZM53.7251 9.12695H55.666V16.7148C55.666 16.9492 55.6978 17.1299 55.7612 17.2568C55.8247 17.3838 55.9199 17.4692 56.0469 17.5132C56.1738 17.5571 56.3252 17.5791 56.501 17.5791C56.6279 17.5791 56.7451 17.5718 56.8525 17.5571C56.96 17.5425 57.0503 17.5278 57.1235 17.5132L57.1309 18.9634C56.9697 19.0171 56.7866 19.061 56.5815 19.0952C56.3813 19.1294 56.1543 19.1465 55.9004 19.1465C55.4658 19.1465 55.085 19.0732 54.7578 18.9268C54.4307 18.7754 54.1768 18.5337 53.9961 18.2017C53.8154 17.8647 53.7251 17.4204 53.7251 16.8687V9.12695ZM62.6973 16.832C62.6973 16.666 62.6533 16.5171 62.5654 16.3853C62.4775 16.2534 62.3115 16.1338 62.0674 16.0264C61.8281 15.9141 61.4766 15.8091 61.0127 15.7114C60.6025 15.6235 60.2241 15.5137 59.8774 15.3818C59.5308 15.25 59.2329 15.0913 58.9839 14.9058C58.7349 14.7153 58.5396 14.4932 58.3979 14.2393C58.2612 13.9805 58.1929 13.6826 58.1929 13.3457C58.1929 13.0186 58.2637 12.7109 58.4053 12.4229C58.5469 12.1299 58.752 11.8735 59.0205 11.6538C59.2891 11.4292 59.6162 11.2534 60.002 11.1265C60.3877 10.9946 60.8223 10.9287 61.3057 10.9287C61.9795 10.9287 62.5581 11.0386 63.0415 11.2583C63.5298 11.478 63.9033 11.7808 64.1621 12.1665C64.4209 12.5474 64.5503 12.9771 64.5503 13.4556H62.6167C62.6167 13.2456 62.5679 13.0552 62.4702 12.8843C62.3774 12.7134 62.2334 12.5767 62.0381 12.4741C61.8428 12.3667 61.5962 12.313 61.2983 12.313C61.0298 12.313 60.8027 12.3569 60.6172 12.4448C60.4365 12.5327 60.2998 12.6475 60.207 12.7891C60.1143 12.9307 60.0679 13.0869 60.0679 13.2578C60.0679 13.3848 60.0923 13.4995 60.1411 13.6021C60.1948 13.6997 60.2803 13.79 60.3975 13.873C60.5146 13.9561 60.6733 14.0317 60.8735 14.1001C61.0786 14.1685 61.3301 14.2344 61.6279 14.2979C62.2188 14.415 62.7339 14.5713 63.1733 14.7666C63.6177 14.957 63.9644 15.2109 64.2134 15.5283C64.4624 15.8457 64.5869 16.251 64.5869 16.7441C64.5869 17.0957 64.5112 17.418 64.3599 17.7109C64.2085 17.999 63.9888 18.2505 63.7007 18.4653C63.4126 18.6802 63.0684 18.8486 62.668 18.9707C62.2676 19.0879 61.8159 19.1465 61.313 19.1465C60.5854 19.1465 59.9702 19.0171 59.4673 18.7583C58.9644 18.4946 58.5835 18.1626 58.3247 17.7622C58.0659 17.3569 57.9365 16.937 57.9365 16.5024H59.7896C59.8042 16.8101 59.8872 17.0566 60.0386 17.2422C60.1899 17.4277 60.3804 17.562 60.6099 17.645C60.8442 17.7231 61.0908 17.7622 61.3496 17.7622C61.6426 17.7622 61.8892 17.7231 62.0894 17.645C62.2896 17.562 62.4409 17.4521 62.5435 17.3154C62.646 17.1738 62.6973 17.0127 62.6973 16.832Z"
          fill="#171717"
        />
      </g>
    </svg>
  );
}
