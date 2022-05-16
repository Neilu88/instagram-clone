const Story = ({ img, username }) => {
  return (
    <div className="">
      <img
        className="select-none hover:scale-110 transition transform duration-200 h-14 w-14 rounded-full p-[1.5px] border-2 border-red-500 object-contain cursor-pointer"
        src={img}
        draggable={false}
      />
      <p className="select-none text-xs w-14 truncate text-center">
        {username}
      </p>
    </div>
  )
}
export default Story
