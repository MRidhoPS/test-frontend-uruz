const DEFAULT_MESSAGES = {
  400: 'Data yang dikirim tidak valid. Periksa kembali isian Anda.',
  401: 'User ID atau password salah.',
  403: 'Akun Anda tidak memiliki akses ke server ini.',
  404: 'Layanan login tidak ditemukan.',
  422: 'Data yang dikirim tidak dapat diproses.',
  429: 'Terlalu banyak percobaan login. Coba lagi beberapa saat.',
  500: 'Terjadi kesalahan pada server. Coba lagi nanti.',
};
const TIMEOUT_MESSAGE = 'Server tidak merespons. Coba lagi.';
const NETWORK_MESSAGE = 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.';

export class ApiError extends Error {
  constructor(message, status = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

const pickServerMessage = (data) => {
  if (typeof data === 'string') {
    return data.trim() && !data.trim().startsWith('<') ? data.trim() : null;
  }
  const candidates = [data?.message, data?.error, data?.msg];
  return candidates.find((value) => typeof value === 'string' && value.trim()) ?? null;
};

export const toApiError = (error) => {
  if (error instanceof ApiError) return error;

  if (error.response) {
    const { status, data } = error.response;
    const message =
      pickServerMessage(data) ??
      DEFAULT_MESSAGES[status] ??
      (status >= 500 ? DEFAULT_MESSAGES[500] : `Terjadi kesalahan (HTTP ${status}).`);
    return new ApiError(message, status);
  }

  return new ApiError(error.code === 'ECONNABORTED' ? TIMEOUT_MESSAGE : NETWORK_MESSAGE);
};
