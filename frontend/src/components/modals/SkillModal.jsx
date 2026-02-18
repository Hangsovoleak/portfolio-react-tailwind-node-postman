import { useState, useEffect } from "react";
import Modal from "../Modal";

export default function SkillModal({ open, onClose, initialData, onSave }) {
    const [draft, setDraft] = useState({ name: "", iconUrl: "" });

    useEffect(() => {
        if (open) {
            if (initialData) {
                setDraft({
                    name:    initialData.name    || "",
                    iconUrl: initialData.iconUrl || initialData.icon || "",
                });
            } else {
                setDraft({ name: "", iconUrl: "" });
            }
        }
    }, [open, initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(draft);
    };

    return (
        <Modal
            open={open}
            title={initialData ? "Edit Skill" : "Add Skill"}
            onClose={onClose}
        >
            <form className="grid gap-3" onSubmit={handleSubmit}>
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Skill name"
                    value={draft.name}
                    onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                    required
                />
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Icon URL"
                    value={draft.iconUrl}
                    onChange={(e) => setDraft({ ...draft, iconUrl: e.target.value })}
                />
                <button
                    type="submit"
                    className="mt-2 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800"
                >
                    {initialData ? "Save Changes" : "Add Skill"}
                </button>
            </form>
        </Modal>
    );
}
