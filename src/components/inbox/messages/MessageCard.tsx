import styles from "./Messges.module.css";
import star from "../../../assets/images/Vector.svg";

const MessageCard = () => {
  return (
    <div className={styles.message_card}>
      <div className="flex items-center justify-between">
        <p className="font-extrabold text-[13px]">mistalogic@gmail.com</p>
        <span className="flex items-center gap-2 text-[#737373]  text-[11px]">
          Now
          <img src={star} />
        </span>
      </div>

      <div>
        <h3
          className="text-[#666666] text-[12px] font-bold"
          style={{ marginTop: "10px" }}
        >
          Haven't gottent my refund
        </h3>
        <p className="text-[#828282] text-[12px]" style={{ marginTop: "10px" }}>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book
        </p>
      </div>
    </div>
  );
};

export default MessageCard;
