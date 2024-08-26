import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";

const SideBar = () => {
  const { toggle, setToggle } = useContext(MyContext);
  return (
    <>
      {!toggle ? (
        <div className="border-2 border-blue-500 max-w-20 h-full ">
          <div className="h-2/3">
            <ul className="h-full flex flex-col justify-around gap-2 list-none text-xs">
              <li className="flex flex-col items-center ">
                <i className="fa-solid fa-house text-lg"></i>
                <p>Home</p>
              </li>
              <li className="flex flex-col items-center">
                <i className="fa-brands fa-youtube text-lg"></i>
                <p>Shorts</p>
              </li>
              <li className="flex flex-col items-center">
                <i className="fa-solid fa-circle-play text-lg"></i>
                <p>Subscription</p>
              </li>
              <li className="flex flex-col items-center">
                <i className="fa-solid fa-music text-lg"></i>
                <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
                  Youtube Music
                </p>
              </li>
              <li className="flex flex-col items-center">
                <i className="fa-brands fa-google-play text-lg"></i>
                <p>You</p>
              </li>
              <li className="flex flex-col items-center">
                <i className="fa-solid fa-arrow-down text-lg"></i>
                <p>Downloads</p>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="w-52 py-4 px-1 flex flex-col justify-evenly max-h-full overflow-y-auto">
          <section>
            <div className="flex justify-start gap-x-4 p-2">
              <i className="fa-solid fa-house text-lg"></i>
              <p>Home</p>
            </div>
            <div className="flex justify-start gap-x-4 p-2">
              <i className="fa-brands fa-youtube text-lg"></i>
              <p>Shorts</p>
            </div>
            <div className="flex justify-start gap-x-4 p-2">
              <i className="fa-solid fa-circle-play text-lg"></i>
              <p>Subscriptions</p>
            </div>
            <div className="flex justify-start gap-x-4 p-2">
              <i className="fa-solid fa-music text-lg"></i>
              <p>VideoTube Music</p>
            </div>
          </section>
          <hr />
          <section>
            <div className="flex justify-start gap-x-4 p-2">
              <i class="fa-solid fa-user-plus"></i>
              <p>Your Channel</p>
            </div>
            <div className="flex justify-start gap-x-4 p-2">
              <i class="fa-solid fa-clock-rotate-left"></i>
              <p>History</p>
            </div>
            <div className="flex justify-start gap-x-4 p-2">
              <i class="fa-brands fa-google-play"></i>
              <p>Playlists</p>
            </div>
            <div className="flex justify-start gap-x-4 p-2">
              <i class="fa-solid fa-clock"></i>
              <p>Watch Later</p>
            </div>
            <div className="flex justify-start gap-x-4 p-2">
              <i class="fa-solid fa-thumbs-up"></i>
              <p>Liked Videos</p>
            </div>
            <div className="flex justify-start gap-x-4 p-2">
              <i class="fa-solid fa-arrow-down"></i>
              <p>Downloads</p>
            </div>
          </section>
          <hr />
          <section>
            <div className="flex justify-start gap-x-4 p-2">
              <p>Subscriptions</p>
            </div>
          </section>
          <hr />
          <section>
            <div className="flex justify-start gap-x-4 p-2">
              <p>More From VideoTube</p>
            </div>
            <div className="flex justify-start gap-x-4 p-2">
              <i class="fa-brands fa-youtube"></i>
              <p>VideoTube Studio</p>
            </div>
            <div className="flex justify-start gap-x-4 p-2">
              <i class="fa-brands fa-square-youtube"></i>
              <p>VideoTube Music</p>
            </div>
            <div className="flex justify-start gap-x-4 p-2">
              <i class="fa-solid fa-child"></i>
              <p>VideoTube Kids</p>
            </div>
          </section>
          <hr />
          <section>
            <div className="flex justify-start gap-x-4 p-2">
              <i class="fa-solid fa-gear"></i>
              <p>Settings</p>
            </div>
            <div className="flex justify-start gap-x-4 p-2">
              <i class="fa-solid fa-flag"></i>
              <p>Report history</p>
            </div>
            <div className="flex justify-start gap-x-4 p-2">
              <i class="fa-solid fa-question"></i>
              <p>Help</p>
            </div>
            <div className="flex justify-start gap-x-4 p-2">
              <i class="fa-solid fa-exclamation"></i>
              <p>Send Feedback</p>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default SideBar;
