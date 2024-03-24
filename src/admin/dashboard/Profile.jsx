import profile from "../../assets/photo_profile.svg";
function Profile() {
  return (
    <div className="bg-white py-10 px-32 rounded-3xl flex flex-col items-center gap-3">
      <img
        src={profile}
        alt=""
        className="rounded-[50%] max-h-[12rem] max-w-[12rem]"
      />

      <h2 className="text-[#303841] font-semibold text-[1.6rem] text-center">
        Ourred Charaf Eddine
      </h2>
      <span className="font-poppins text-[#2185D5] text-[1.4rem] font-bold">
        Admin
      </span>
    </div>
  );
}

export default Profile;
