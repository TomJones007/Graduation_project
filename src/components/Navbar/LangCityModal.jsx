import Modal from "../Modal/Modal";

const langs = ["RU", "UA", "EN"];
const cities = ["Киев", "Днепр", "Харьков", "Одесса"];

const LangCityModal = ({ open, onClose, currentLang = "RU", currentCity = "Киев", onChangeLang, onChangeCity }) => {
  return (
    <Modal open={open} onClose={onClose} mobileMode="sheet" labelledBy="lc-title">
      <div className="px-5 py-4 border-b rounded-t-2xl bg-white sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <h2 id="lc-title" className="text-lg sm:text-xl font-bold">Выберите язык</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#F5F5F7] text-gray-600 hover:bg-gray-200 cursor-pointer"
            aria-label="Закрыть"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="px-5 py-4">
        {/* Languages */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => onChangeLang?.(l)}
              className={`px-4 py-3 rounded-xl text-sm font-medium ${
                l === currentLang ? "bg-orange-500 text-white" : "bg-[#F5F5F7]"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Cities */}
        <h3 className="text-sm text-gray-500 mb-2">Выберите город</h3>
        <div className="grid grid-cols-2 gap-2">
          {cities.map((c) => (
            <button
              key={c}
              onClick={() => onChangeCity?.(c)}
              className={`px-4 py-3 rounded-xl text-sm font-medium text-[#1D1D1F] ${
                c === currentCity ? "bg-white border border-orange-400" : "bg-[#F5F5F7]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default LangCityModal;
