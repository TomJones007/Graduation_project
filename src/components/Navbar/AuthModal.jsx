import Modal from "../Modal/Modal";

const AuthModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose} mobileMode="center" labelledBy="auth-title">
      <div className="px-5 py-4 border-b rounded-t-2xl bg-white sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <h2 id="auth-title" className="text-xl font-bold">Авторизация</h2>
          <button onClick={onClose} className="p-2 rounded-lg bg-[#F5F5F7] hover:bg-gray-200 cursor-pointer">✕</button>
        </div>
      </div>

      <form className="px-5 py-5 space-y-3">
        <label className="block text-sm text-gray-600">Имя</label>
        <input className="w-full p-3 rounded-xl border" placeholder="Имя" />

        <label className="block text-sm text-gray-600">Телефон</label>
        <div className="flex gap-2">
          <select className="p-3 rounded-xl border">
            <option>+380</option>
          </select>
          <input className="flex-1 p-3 rounded-xl border" placeholder="Ваш номер телефона" />
        </div>

        <button type="button" className="w-full bg-[#00CC2D] text-white rounded-xl py-3 font-medium">
          Войти по номеру телефона
        </button>

        <div className="pt-3 space-y-2">
          <button type="button" className="w-full bg-[#F5F5F7] rounded-xl py-3">Google</button>
          <button type="button" className="w-full bg-[#F5F5F7] rounded-xl py-3">Facebook</button>
          <button type="button" className="w-full bg-[#F5F5F7] rounded-xl py-3">Войти через Apple ID</button>
        </div>
      </form>
    </Modal>
  );
};

export default AuthModal;
