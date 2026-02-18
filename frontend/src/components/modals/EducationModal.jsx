import { useState, useEffect } from "react";
import Modal from "../Modal";

export default function EducationModal({ open, onClose, initialData, onSave }) {
    const [draft, setDraft] = useState({
        institution: "",
        degree: "",
        period: "",
    });

    useEffect(() => {
        if (open) {
            if (initialData) {
                setDraft({
                    institution: initialData.institution || "",
                    degree: initialData.degree || "",
                    period: initialData.period || "",
                });
            } else {
                setDraft({ institution: "", degree: "", period: "" });
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
            title={initialData ? "Edit Education" : "Add Education"}
            onClose={onClose}
        >
            <form className="grid gap-3" onSubmit={handleSubmit}>
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Institution"
                    value={draft.institution}
                    onChange={(e) =>
                        setDraft({ ...draft, institution: e.target.value })
                    }
                    required
                />
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Degree"
                    value={draft.degree}
                    onChange={(e) =>
                        setDraft({ ...draft, degree: e.target.value })
                    }
                    required
                />
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Period (e.g. 2024 - present)"
                    value={draft.period}
                    onChange={(e) =>
                        setDraft({ ...draft, period: e.target.value })
                    }
                    required
                />
                <button
                    type="submit"
                    className="mt-2 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800"
                >
                    {initialData ? "Save Changes" : "Add Education"}
                </button>
            </form>
        </Modal>
    );
}
