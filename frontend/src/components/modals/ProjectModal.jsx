import { useState, useEffect } from "react";
import Modal from "../Modal";

export default function ProjectModal({ open, onClose, initialData, onSave }) {
    const [draft, setDraft] = useState({
        title: "",
        description: "",
        imageUrl: "",
        projectUrl: "",
        tags: "",
    });

    useEffect(() => {
        if (open) {
            if (initialData) {
                setDraft({
                    title:       initialData.title          || "",
                    description: initialData.description    || "",
                    imageUrl:    initialData.image          || initialData.imageUrl || "",
                    projectUrl:  initialData.link           || initialData.projectUrl || "",
                    tags:        Array.isArray(initialData.tags)
                                ? initialData.tags.join(", ")
                                : initialData.tags || "",
                });
            } else {
                setDraft({
                    title: "",
                    description: "",
                    imageUrl: "",
                    projectUrl: "",
                    tags: "",
                });
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
            title={initialData ? "Edit Project" : "Add Project"}
            onClose={onClose}
        >
            <form className="grid gap-3" onSubmit={handleSubmit}>
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Title"
                    value={draft.title}
                    onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                    required
                />
                <textarea
                    className="min-h-[120px] rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Description"
                    value={draft.description}
                    onChange={(e) =>
                        setDraft({ ...draft, description: e.target.value })
                    }
                    required
                />
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Image URL"
                    value={draft.imageUrl}
                    onChange={(e) =>
                        setDraft({ ...draft, imageUrl: e.target.value })
                    }
                />
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Project URL"
                    value={draft.projectUrl}
                    onChange={(e) =>
                        setDraft({ ...draft, projectUrl: e.target.value })
                    }
                />
                <input
                    className="rounded-lg border border-slate-300 px-3 py-2"
                    placeholder="Tags (comma separated)"
                    value={draft.tags}
                    onChange={(e) => setDraft({ ...draft, tags: e.target.value })}
                />
                <button
                    type="submit"
                    className="mt-2 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800"
                >
                    {initialData ? "Save Changes" : "Add Project"}
                </button>
            </form>
        </Modal>
    );
}
