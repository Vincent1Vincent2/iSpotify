import "../PlaylistMenuItem/styles.css";

export default function PlaylistMenuItem() {
  return (
    <svg
      id="PlaylistMenuItem"
      width="275"
      height="26"
      viewBox="0 0 275 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        id="PlaylistItemBase"
        width="275"
        height="26"
        fill="white"
        fillOpacity="0.01"
      />
      <path
        className="chevronRight"
        d="M262.914 13.4429C262.945 13.4742 262.945 13.5249 262.914 13.5562L259.117 17.3528C258.961 17.5093 258.961 17.763 259.117 17.9194L260.081 18.8827C260.237 19.0391 260.491 19.0391 260.647 18.8827L264.766 14.7637C264.772 14.7582 264.778 14.7525 264.784 14.7466L265.748 13.7834C265.904 13.6269 265.904 13.3732 265.748 13.2168L260.648 8.11735C260.492 7.96088 260.238 7.96088 260.082 8.11735L259.118 9.08057C258.962 9.23703 258.962 9.49071 259.118 9.64717L262.914 13.4429Z"
        fill="#171717"
      />
      <path
        id="PlaylistText"
        d="M12.792 14.2881H10.2012V12.9277H12.792C13.2432 12.9277 13.6077 12.8548 13.8857 12.709C14.1637 12.5632 14.3665 12.3626 14.4941 12.1074C14.6263 11.8477 14.6924 11.5514 14.6924 11.2188C14.6924 10.9043 14.6263 10.6104 14.4941 10.3369C14.3665 10.0589 14.1637 9.83561 13.8857 9.66699C13.6077 9.49837 13.2432 9.41406 12.792 9.41406H10.7275V18H9.01172V8.04688H12.792C13.5622 8.04688 14.2161 8.18359 14.7539 8.45703C15.2962 8.72591 15.7087 9.09961 15.9912 9.57812C16.2738 10.0521 16.415 10.5944 16.415 11.2051C16.415 11.8477 16.2738 12.3991 15.9912 12.8594C15.7087 13.3197 15.2962 13.6729 14.7539 13.9189C14.2161 14.165 13.5622 14.2881 12.792 14.2881ZM19.5527 7.5V18H17.8984V7.5H19.5527ZM25.5273 16.5166V12.9893C25.5273 12.7249 25.4795 12.4971 25.3838 12.3057C25.2881 12.1143 25.1423 11.9661 24.9463 11.8613C24.7549 11.7565 24.5133 11.7041 24.2217 11.7041C23.9528 11.7041 23.7204 11.7497 23.5244 11.8408C23.3285 11.932 23.1758 12.055 23.0664 12.21C22.957 12.3649 22.9023 12.5404 22.9023 12.7363H21.2617C21.2617 12.4447 21.3324 12.1621 21.4736 11.8887C21.6149 11.6152 21.82 11.3714 22.0889 11.1572C22.3577 10.943 22.679 10.7744 23.0527 10.6514C23.4264 10.5283 23.8457 10.4668 24.3105 10.4668C24.8665 10.4668 25.3587 10.5602 25.7871 10.7471C26.2201 10.9339 26.5596 11.2165 26.8057 11.5947C27.0563 11.9684 27.1816 12.4378 27.1816 13.0029V16.291C27.1816 16.6283 27.2044 16.9313 27.25 17.2002C27.3001 17.4645 27.3708 17.6947 27.4619 17.8906V18H25.7734C25.696 17.8223 25.6344 17.5967 25.5889 17.3232C25.5479 17.0452 25.5273 16.7764 25.5273 16.5166ZM25.7666 13.502L25.7803 14.5205H24.5977C24.2923 14.5205 24.0234 14.5501 23.791 14.6094C23.5586 14.6641 23.3649 14.7461 23.21 14.8555C23.055 14.9648 22.9388 15.097 22.8613 15.252C22.7839 15.4069 22.7451 15.5824 22.7451 15.7783C22.7451 15.9743 22.7907 16.1543 22.8818 16.3184C22.973 16.4779 23.1051 16.6032 23.2783 16.6943C23.4561 16.7855 23.6702 16.8311 23.9209 16.8311C24.2581 16.8311 24.5521 16.7627 24.8027 16.626C25.0579 16.4847 25.2585 16.3138 25.4043 16.1133C25.5501 15.9082 25.6276 15.7145 25.6367 15.5322L26.1699 16.2637C26.1152 16.4505 26.0218 16.651 25.8896 16.8652C25.7575 17.0794 25.5843 17.2845 25.3701 17.4805C25.1605 17.6719 24.9076 17.8291 24.6113 17.9521C24.3197 18.0752 23.9824 18.1367 23.5996 18.1367C23.1165 18.1367 22.6859 18.041 22.3076 17.8496C21.9294 17.6536 21.6331 17.3916 21.4189 17.0635C21.2048 16.7308 21.0977 16.3548 21.0977 15.9355C21.0977 15.5436 21.1706 15.1973 21.3164 14.8965C21.4668 14.5911 21.6855 14.3359 21.9727 14.1309C22.2643 13.9258 22.6198 13.7708 23.0391 13.666C23.4583 13.5566 23.9368 13.502 24.4746 13.502H25.7666ZM30.9414 17.1934L32.9512 10.6035H34.7148L31.748 19.1279C31.6797 19.3102 31.5908 19.5085 31.4814 19.7227C31.3721 19.9368 31.2285 20.1396 31.0508 20.3311C30.8776 20.527 30.6611 20.6842 30.4014 20.8027C30.1416 20.9258 29.8271 20.9873 29.458 20.9873C29.3122 20.9873 29.1709 20.9736 29.0342 20.9463C28.902 20.9235 28.7767 20.8984 28.6582 20.8711L28.6514 19.6133C28.6969 19.6178 28.7516 19.6224 28.8154 19.627C28.8838 19.6315 28.9385 19.6338 28.9795 19.6338C29.2529 19.6338 29.4808 19.5996 29.6631 19.5312C29.8454 19.4674 29.9935 19.3626 30.1074 19.2168C30.2259 19.071 30.3262 18.875 30.4082 18.6289L30.9414 17.1934ZM29.8066 10.6035L31.5635 16.1406L31.8574 17.877L30.7158 18.1709L28.0293 10.6035H29.8066ZM37.4219 7.5V18H35.7676V7.5H37.4219ZM40.9902 10.6035V18H39.3359V10.6035H40.9902ZM39.2266 8.66211C39.2266 8.41146 39.3086 8.2041 39.4727 8.04004C39.6413 7.87142 39.8737 7.78711 40.1699 7.78711C40.4616 7.78711 40.6917 7.87142 40.8604 8.04004C41.029 8.2041 41.1133 8.41146 41.1133 8.66211C41.1133 8.9082 41.029 9.11328 40.8604 9.27734C40.6917 9.44141 40.4616 9.52344 40.1699 9.52344C39.8737 9.52344 39.6413 9.44141 39.4727 9.27734C39.3086 9.11328 39.2266 8.9082 39.2266 8.66211ZM46.9443 15.9971C46.9443 15.833 46.9033 15.6849 46.8213 15.5527C46.7393 15.416 46.582 15.293 46.3496 15.1836C46.1217 15.0742 45.7845 14.974 45.3379 14.8828C44.946 14.7962 44.5859 14.6937 44.2578 14.5752C43.9342 14.4521 43.6562 14.304 43.4238 14.1309C43.1914 13.9577 43.0114 13.7526 42.8838 13.5156C42.7562 13.2786 42.6924 13.0052 42.6924 12.6953C42.6924 12.3945 42.7585 12.1097 42.8906 11.8408C43.0228 11.5719 43.2119 11.335 43.458 11.1299C43.7041 10.9248 44.0026 10.763 44.3535 10.6445C44.709 10.526 45.1055 10.4668 45.543 10.4668C46.1628 10.4668 46.6937 10.5716 47.1357 10.7812C47.5824 10.9863 47.9242 11.2666 48.1611 11.6221C48.3981 11.973 48.5166 12.3695 48.5166 12.8115H46.8691C46.8691 12.6156 46.819 12.4333 46.7188 12.2646C46.623 12.0915 46.4772 11.9525 46.2812 11.8477C46.0853 11.7383 45.8392 11.6836 45.543 11.6836C45.2604 11.6836 45.0257 11.7292 44.8389 11.8203C44.6566 11.9069 44.5199 12.0208 44.4287 12.1621C44.3421 12.3034 44.2988 12.4583 44.2988 12.627C44.2988 12.75 44.3216 12.8617 44.3672 12.9619C44.4173 13.0576 44.4993 13.1465 44.6133 13.2285C44.7272 13.306 44.8822 13.3789 45.0781 13.4473C45.2786 13.5156 45.5293 13.5817 45.8301 13.6455C46.3952 13.764 46.8805 13.9167 47.2861 14.1035C47.6963 14.2858 48.0107 14.5228 48.2295 14.8145C48.4482 15.1016 48.5576 15.4661 48.5576 15.9082C48.5576 16.2363 48.487 16.5371 48.3457 16.8105C48.209 17.0794 48.0085 17.3141 47.7441 17.5146C47.4798 17.7106 47.1631 17.8633 46.7939 17.9727C46.4294 18.082 46.0192 18.1367 45.5635 18.1367C44.8936 18.1367 44.3262 18.0182 43.8613 17.7812C43.3965 17.5397 43.0433 17.2321 42.8018 16.8584C42.5648 16.4801 42.4463 16.0882 42.4463 15.6826H44.0391C44.0573 15.988 44.1416 16.2318 44.292 16.4141C44.4469 16.5918 44.6383 16.7217 44.8662 16.8037C45.0986 16.8812 45.3379 16.9199 45.584 16.9199C45.8802 16.9199 46.1286 16.8812 46.3291 16.8037C46.5296 16.7217 46.6823 16.6123 46.7871 16.4756C46.8919 16.3343 46.9443 16.1748 46.9443 15.9971ZM53.3906 10.6035V11.8066H49.2207V10.6035H53.3906ZM50.4238 8.79199H52.0713V15.9561C52.0713 16.1839 52.1032 16.3594 52.167 16.4824C52.2354 16.6009 52.3288 16.6807 52.4473 16.7217C52.5658 16.7627 52.7048 16.7832 52.8643 16.7832C52.9782 16.7832 53.0876 16.7764 53.1924 16.7627C53.2972 16.749 53.3815 16.7354 53.4453 16.7217L53.4521 17.9795C53.3154 18.0205 53.1559 18.057 52.9736 18.0889C52.7959 18.1208 52.5908 18.1367 52.3584 18.1367C51.9801 18.1367 51.6452 18.0706 51.3535 17.9385C51.0618 17.8018 50.834 17.5807 50.6699 17.2754C50.5059 16.9701 50.4238 16.5645 50.4238 16.0586V8.79199ZM58.8115 15.9971C58.8115 15.833 58.7705 15.6849 58.6885 15.5527C58.6064 15.416 58.4492 15.293 58.2168 15.1836C57.9889 15.0742 57.6517 14.974 57.2051 14.8828C56.8132 14.7962 56.4531 14.6937 56.125 14.5752C55.8014 14.4521 55.5234 14.304 55.291 14.1309C55.0586 13.9577 54.8786 13.7526 54.751 13.5156C54.6234 13.2786 54.5596 13.0052 54.5596 12.6953C54.5596 12.3945 54.6257 12.1097 54.7578 11.8408C54.89 11.5719 55.0791 11.335 55.3252 11.1299C55.5713 10.9248 55.8698 10.763 56.2207 10.6445C56.5762 10.526 56.9727 10.4668 57.4102 10.4668C58.0299 10.4668 58.5609 10.5716 59.0029 10.7812C59.4495 10.9863 59.7913 11.2666 60.0283 11.6221C60.2653 11.973 60.3838 12.3695 60.3838 12.8115H58.7363C58.7363 12.6156 58.6862 12.4333 58.5859 12.2646C58.4902 12.0915 58.3444 11.9525 58.1484 11.8477C57.9525 11.7383 57.7064 11.6836 57.4102 11.6836C57.1276 11.6836 56.8929 11.7292 56.7061 11.8203C56.5238 11.9069 56.387 12.0208 56.2959 12.1621C56.2093 12.3034 56.166 12.4583 56.166 12.627C56.166 12.75 56.1888 12.8617 56.2344 12.9619C56.2845 13.0576 56.3665 13.1465 56.4805 13.2285C56.5944 13.306 56.7493 13.3789 56.9453 13.4473C57.1458 13.5156 57.3965 13.5817 57.6973 13.6455C58.2624 13.764 58.7477 13.9167 59.1533 14.1035C59.5635 14.2858 59.8779 14.5228 60.0967 14.8145C60.3154 15.1016 60.4248 15.4661 60.4248 15.9082C60.4248 16.2363 60.3542 16.5371 60.2129 16.8105C60.0762 17.0794 59.8757 17.3141 59.6113 17.5146C59.347 17.7106 59.0303 17.8633 58.6611 17.9727C58.2965 18.082 57.8864 18.1367 57.4307 18.1367C56.7607 18.1367 56.1934 18.0182 55.7285 17.7812C55.2637 17.5397 54.9105 17.2321 54.6689 16.8584C54.432 16.4801 54.3135 16.0882 54.3135 15.6826H55.9062C55.9245 15.988 56.0088 16.2318 56.1592 16.4141C56.3141 16.5918 56.5055 16.7217 56.7334 16.8037C56.9658 16.8812 57.2051 16.9199 57.4512 16.9199C57.7474 16.9199 57.9958 16.8812 58.1963 16.8037C58.3968 16.7217 58.5495 16.6123 58.6543 16.4756C58.7591 16.3343 58.8115 16.1748 58.8115 15.9971Z"
        fill="#171717"
      />
    </svg>
  );
}