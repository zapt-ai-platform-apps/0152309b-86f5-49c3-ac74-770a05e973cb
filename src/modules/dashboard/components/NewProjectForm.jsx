import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function NewProjectForm({ onSubmit, onCancel }) {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const processSubmit = async (data) => {
    setIsLoading(true);
    try {
      await onSubmit(data);
    } catch (error) {
      console.error('Error creating project:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-6">Buat Proyek Baru</h3>
      
      <form onSubmit={handleSubmit(processSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="label">Nama Proyek</label>
          <input
            id="name"
            className={`input ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Masukkan nama proyek"
            {...register('name', { required: 'Nama proyek wajib diisi' })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="label">Deskripsi</label>
          <textarea
            id="description"
            rows="3"
            className={`input ${errors.description ? 'border-red-500' : ''}`}
            placeholder="Jelaskan secara singkat tentang ide bisnis Anda"
            {...register('description', { required: 'Deskripsi wajib diisi' })}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label htmlFor="industry" className="label">Industri</label>
          <select
            id="industry"
            className={`input ${errors.industry ? 'border-red-500' : ''}`}
            {...register('industry', { required: 'Pilih industri' })}
          >
            <option value="">Pilih industri</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Fintech">Financial Technology (Fintech)</option>
            <option value="Edtech">Educational Technology (EdTech)</option>
            <option value="Healthtech">Health Technology (HealthTech)</option>
            <option value="Agritech">Agricultural Technology (AgriTech)</option>
            <option value="SaaS">Software as a Service (SaaS)</option>
            <option value="F&B">Food & Beverage</option>
            <option value="Retail">Retail</option>
            <option value="Other">Lainnya</option>
          </select>
          {errors.industry && (
            <p className="mt-1 text-sm text-red-600">{errors.industry.message}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label htmlFor="targetMarket" className="label">Target Market</label>
          <input
            id="targetMarket"
            className="input"
            placeholder="Contoh: Profesional muda di kota besar"
            {...register('targetMarket')}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="problemStatement" className="label">Permasalahan yang Ingin Dipecahkan</label>
          <textarea
            id="problemStatement"
            rows="3"
            className="input"
            placeholder="Jelaskan permasalahan yang ingin diselesaikan oleh bisnis Anda"
            {...register('problemStatement')}
          />
        </div>
        
        <div className="flex justify-end gap-3 mt-6">
          <button 
            type="button" 
            onClick={onCancel}
            className="btn-outline cursor-pointer"
            disabled={isLoading}
          >
            Batal
          </button>
          <button 
            type="submit" 
            className="btn-primary cursor-pointer flex items-center justify-center min-w-[100px]"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Menyimpan...
              </>
            ) : 'Simpan Proyek'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewProjectForm;