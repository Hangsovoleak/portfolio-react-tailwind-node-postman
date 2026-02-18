import { useState, useEffect } from "react";
import Modal from "../Modal";

export default function ProfileModal({ open, onClose, initialData, onSave }) {
    const [draft, setDraft] = useState({
        name: "",
        bio: "",
        email: "",
        cvUrl: "",
        imageUrl: "",
    });

    useEffect(() => {
        if (open && initialData) {
            setDraft({
                name:       initialData.name     || "",
                bio:        initialData.bio      || "",
                email:      initialData.email    || "",
                cvUrl:      initialData.cvUrl    || "",
                imageUrl:   initialData.imageUrl || "",
            });
        }
    }, [open, initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(draft);
    };

    return (
        <Modal open={open} title="Edit Profile" onClose={onClose}>
            <form className="grid gap-3" onSubmit={handleSubmit}>
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Name"
                    value={draft.name}
                    onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                    required
                />
                <textarea
                    className="min-h-[120px] rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Bio"
                    value={draft.bio}
                    onChange={(e) => setDraft({ ...draft, bio: e.target.value })}
                    required
                />
                <button
                    type="submit"
                    className="mt-2 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800"
                >
                    Save
                </button>
            </form>
        </Modal>
    );
}
