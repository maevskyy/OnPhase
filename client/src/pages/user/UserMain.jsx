import { useSelector } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import FileBase from 'react-file-base64';
import UserBlocks from './UserBlocks';
import axios from 'axios';
import { useRef } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { fetchImage, uploadImage } from '../../store/user.js';
import { useDispatch } from 'react-redux';
import { MdAddPhotoAlternate } from 'react-icons/md';

const UserMain = () => {
	const dispatch = useDispatch();
	const userState = useSelector((el) => el.userReducer.user);
	const pending = useSelector((el) => el.userReducer.loading);
	const [image, setImage] = useState('');
	const saveHandler = async (base64) => {
		const imageBase64 = base64.base64;
		await setImage(imageBase64);
		dispatch(uploadImage({ ...userState, image: imageBase64 }));
	  };
	return (
		<main className="flex justify-between ">
			<section className="flex flex-col gap-5 mr-[6em]">
				<div className="flex flex-col gap-2">
					<div className="w-[8em] h-[8em] relative rounded-full">
						{pending ? (
							<div className="flex items-center gap-1">
								<AiOutlineLoading className="animate-spin h-[1em] w-[1em]" />
								<span>Processing...</span>
							</div>
						) : (
							<>
								{userState.image ? (
									<img
										src={userState?.image}
										className="w-[8em] h-[8em] rounded-full object-cover z-0 "
										alt=""
									/>
								) : (
									<FaUserCircle className="w-[8em] h-[8em] rounded-full text-gray-300" />
								)}
								<div className="group" id="fileInput">
									<FileBase
										type="file"
										multiple={false}
										onDone={(base64) => saveHandler(base64)}
									/>
									<MdAddPhotoAlternate className=" text-[24px] absolute top-[40%] text-transparent  left-[40%]  group-hover:text-[#9b97ff] " />
								</div>
							</>
						)}
					</div>
					<h3 className="text-2xl font-bold ">{userState?.name}</h3>
					<h3 className="text-gray-500">{userState?.email}</h3>
				</div>
			</section>
			<section className="flex flex-col gap-3 max-w-[37em]">
				<h2 className="text-2xl font-bold text-[#5855D6]">
					Personal Information
				</h2>
				<p>
					Manage your personal information, including phone numbers and email
					adress where you can be contacted
				</p>
				<div className="flex justify-between">
					<div className="flex flex-col gap-2">
						<UserBlocks value={userState?.name} placeholder="Name" />
						<UserBlocks value={'Ukraine, Kiev'} placeholder="Country Region" />
						<UserBlocks value={userState?.email} placeholder="Contactable at" />
					</div>
					<div className="flex flex-col gap-2">
						<UserBlocks value={'07 July 2001'} placeholder="Date of Birth" />
						<UserBlocks value={'Ukrainian'} placeholder="Language" />
					</div>
				</div>
			</section>
		</main>
	);
};

export default UserMain;
