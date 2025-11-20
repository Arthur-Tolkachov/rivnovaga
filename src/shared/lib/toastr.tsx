import { toast } from "react-toastify";

import { Toastr } from "@shared/ui/base/Toastr";

class ToastrService {
  success(message: string) {
    toast(() => <Toastr message={message} />, {
      type: "success",
      position: "bottom-right",
      style: {
        border: `1px solid var(--color-success)`,
        color: "var(--color-primary-dark)",
      },
    });
  }
}

export const notify = new ToastrService();
